<?php

namespace App\Http\Controllers;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Resources\Article as ArticleResource;
use Illuminate\Support\Facades\Response;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->paginate(5);
        // Return collection of Articles as a Resource
        return ArticleResource::collection($articles);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return ArticleResource
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);
        // Return Single Article as a Resource
        return new ArticleResource($article);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return     "\App\Http\Resources\Article"
     */
    public function store(Request $request)
    {
        $article = null;
        if($request->isMethod('post'))
            $article = new Article();
        if($request->isMethod('put'))
            $article = Article::findOrFail($request->input('article_id'));
        $article->title = $request->input('title');
        $article->body = $request->input('body');
        if($article->save()) {
            return new ArticleResource($article);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return ArticleResource
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        if($article->delete()) {
            return new ArticleResource($article);
        }
    }
}
