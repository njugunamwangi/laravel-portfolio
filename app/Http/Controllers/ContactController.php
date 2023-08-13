<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request) {

        $validated = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits_between:10,12',
            'message' => 'required',
        ]);

        Mail::to('njugunamwangi.n@gmail.com')
            ->send(new ContactMail($validated['name'], $validated['email'], $validated['phone'], $validated['message']));

        return ['success' => true];
    }
}
