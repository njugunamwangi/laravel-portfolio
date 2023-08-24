<?php

namespace App\Http\Controllers;

use App\Models\Pricing;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePricingRequest;
use App\Http\Requests\UpdatePricingRequest;
use App\Http\Resources\PricingResource;

class PricingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PricingResource::collection(
            Pricing::query()
                ->orderBy('created_at', 'desc')
                ->paginate(10)
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePricingRequest $request)
    {
        $data = $request->validated();

        $pricing = Pricing::create($data);

        return new PricingResource($pricing);
    }

    /**
     * Display the specified resource.
     */
    public function show(Pricing $pricing)
    {
        return new PricingResource($pricing);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePricingRequest $request, Pricing $pricing)
    {
        $data = $request->validated();

        $pricing->update($data);

        return new PricingResource($pricing);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pricing $pricing)
    {
        $pricing->delete();

        return response('', 204);
    }
}
