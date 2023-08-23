<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTextWidgetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'key' => 'required|string|unique:text_widgets,key|max:255',
            'image' => 'string',
            'title' => 'required|string|unique:text_widgets,title|max:2000',
            'content' => 'nullable|string',
            'active' => 'required|boolean'
        ];
    }
}
