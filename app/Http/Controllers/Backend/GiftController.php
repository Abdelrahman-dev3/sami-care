<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\GiftCard;

class GiftController extends Controller
{
    public function __construct()
    {
        $this->middleware('permission:view_gift')->only('index');
        $this->middleware('permission:delete_gift')->only('destroy');
    }

    
    public function index()
    {
        $module_action = 'List';
        $module_title = 'Gift Cards';
        $gifts = GiftCard::latest('id')->get();
        return view('backend.gift.index_datatable', compact('module_action', 'gifts' , 'module_title'));
    }

    public function destroy($id)
    {
        $gift = GiftCard::findOrFail($id);
        $gift->delete();
        return redirect()->back()->with('success', __('messages.gift_deleted_successfully'));
    }
}
