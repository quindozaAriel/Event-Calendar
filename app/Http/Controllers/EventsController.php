<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;
use App\Http\Requests\EventRequest;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EventRequest $request)
    {
        $data = $request->validated();

        $date_from = strtotime($data['date_from']);
        $date_to = strtotime($data['date_to']);

        $store_data = [];
     
        while ($date_from <= $date_to) {
            $day = date('D',$date_from);
            if(in_array($day,$data['days'])){
                $array_data =[
                    'description' => $data['description'],
                    'date' => date('Y-m-d',$date_from)
                ];
                $store_data[] = $array_data;
            }
            $date_from = strtotime('+1 day', $date_from);
        }

        return $store_data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Events  $events
     * @return \Illuminate\Http\Response
     */
    public function show(Events $events)
    {
        //
    }
}
