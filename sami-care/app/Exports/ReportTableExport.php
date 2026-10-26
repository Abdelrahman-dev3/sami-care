<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

// Generic export for report tables: same headings and rows shown on screen, all filtered rows (no pagination).
class ReportTableExport implements FromArray, WithHeadings, ShouldAutoSize, WithEvents
{
    public function __construct(private array $headings, private iterable $rows) {}

    public function headings(): array
    {
        return $this->headings;
    }

    public function array(): array
    {
        return collect($this->rows)->map(fn ($row) => array_values((array) $row))->all();
    }

    public function registerEvents(): array
    {
        return [AfterSheet::class => function (AfterSheet $event) {
            $sheet = $event->sheet->getDelegate();
            $sheet->setRightToLeft(true);
            $sheet->getStyle('1:1')->getFont()->setBold(true);
            $sheet->freezePane('A2');
        }];
    }
}
