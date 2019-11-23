<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Article extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        //return parent::toArray($request);

        // Without "timestamps"
        return [
            'id' => $this->id,
            'title' => $this->title,
            'body' => $this->body,
        ];
    }

    public function with($request)
    {
        // return parent::with($request); // TO_DO: Change the auto-generated stub

        // Add Json sting of some additional info
        return [
            'version' => '1.0.0',
            'author_url' => url('https://progerskill.inf.ua')
        ];
    }

}
