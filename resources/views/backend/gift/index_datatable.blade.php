@extends('backend.layouts.app')

@section('title')
{{ __($module_action) }} {{ __($module_title) }}
@endsection

@push('after-styles')
@endpush

@section('content')
<div class="card">
    <div class="card-body" style="overflow-x: auto;">
        <h3 class="mb-4">{{ __('messages.gift_cards_list') }}</h3>
        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>{{ __('messages.recipient_name') }}</th>
                <th>{{ __('messages.recipient_phone') }}</th>
                <th>رسالة المرسل لمستلم الهدية</th>
                <th>{{ __('messages.selected_services') }}</th>
                <th>{{ __('messages.subtotal') }}</th>
                <th>{{ __('booking.lbl_payment_status') }}</th>
                <th>{{ __('messages.created_at') }}</th>
                <th>{{ __('messages.action') }}</th>
            </tr>
            </thead>
            <tbody>
            @forelse($gifts as $gift)
                <tr>
                <td>{{ $gift->recipient_name ?? '-' }}</td> 
                <td>{{ $gift->recipient_phone ?? '-' }}</td>
                <td title="{{ $gift->message ?? '' }}">
                    {{ \Illuminate\Support\Str::limit($gift->message ?? '-', 80) }}
                </td>
                <td>
                    @forelse($gift->services_list as $service)
                        <span class="badge bg-primary">{{ $service->name }}</span> <br>
                    @empty
                        -
                    @endforelse
                </td>
                <td>{{ $gift->subtotal ?? '-' }}</td>
                <td style="text-align: center;font-size: 16px;">
                    @if($gift->payment_status == 1)
                        <span class="badge bg-success">{{ __('gift.paid') }}</span>
                    @else
                        <span class="badge bg-warning text-dark">{{ __('gift.unpaid') }}</span>
                    @endif
                </td>
                <td>{{ $gift->created_at ? $gift->created_at->format('Y-m-d') : '-' }}</td>
                <td>
                    @hasPermission('delete_gift')
                        <a href="{{ route('gift.delete', $gift->id) }}" id="delete-bookings-138" class="btn btn-soft-danger btn-sm" onclick="return confirm('{{ __('messages.confirm_delete') }}');">
                            <i class="fa-solid fa-trash"></i>
                        </a>
                    @endhasPermission
                </td>
                </tr>
            @empty
                <tr>
                    <td colspan="8" class="text-center">{{ __('messages.no_gift_cards') }}</td>
                </tr>
            @endforelse
       
            </tbody>
        </table>
    </div>
</div>
@endsection
