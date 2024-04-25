<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="satyajit_med_downloader_0"></a>satyajit_med_downloader</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="Media_file_downloader__a_complete_solution_to_download_imagesvideosPDFS_and_audio_file_hassle_free_1"></a>Media file downloader - a complete solution to download images,videos,PDFS and audio file hassle free</h2>
<h1 class="code-line" data-line-start=2 data-line-end=3 ><a id="_2"></a></h1>
<h2 class="code-line" data-line-start=4 data-line-end=5 ><a id="Installation_4"></a>Installation</h2>
<p class="has-line-data" data-line-start="6" data-line-end="7">You can install the Satyajit Media Downloader package via npm. Run the following command in your terminal:</p>
<pre><code class="has-line-data" data-line-start="9" data-line-end="11" class="language-bash">npm install satyajit_med_downloader
</code></pre>
<p class="has-line-data" data-line-start="12" data-line-end="14"><strong>downloadFile  is a function who takes two argument</strong><br>
<code>downloadFile(&quot;url&quot;,&quot;location to download the files&quot;)</code></p>
<p class="has-line-data" data-line-start="15" data-line-end="17"><strong>Important</strong><br>
<code>&quot;type&quot;: &quot;module&quot;</code> will cause . js files to be interpreted as ES modules. so make sure you have added this line to your <code>package.json</code> file</p>
<h2 class="code-line" data-line-start=17 data-line-end=18 ><a id="How_to_use_17"></a>How to use</h2>
<ul>
<li class="has-line-data" data-line-start="18" data-line-end="19">to download  the image</li>
</ul>
<pre><code class="has-line-data" data-line-start="20" data-line-end="27" class="language-javascript"><span class="hljs-keyword">import</span> { downloadFile } <span class="hljs-keyword">from</span> <span class="hljs-string">'satyajit_med_downloader'</span>;

<span class="hljs-comment">// Example: Download an image</span>
downloadFile(<span class="hljs-string">'https://example.com/image.jpg'</span>, <span class="hljs-string">'./downloads/image'</span>)
  .then(() =&gt; <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Image downloaded successfully'</span>))
  .catch((error) =&gt; <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'Error downloading image:'</span>, error));
</code></pre>
<ul>
<li class="has-line-data" data-line-start="27" data-line-end="28">to download  the video</li>
</ul>
<pre><code class="has-line-data" data-line-start="29" data-line-end="35" class="language-javascript"><span class="hljs-comment">// Example: Download a video</span>
<span class="hljs-keyword">import</span> { downloadFile } <span class="hljs-keyword">from</span> <span class="hljs-string">'satyajit_med_downloader'</span>;
downloadFile(<span class="hljs-string">'https://example.com/video.mp4'</span>, <span class="hljs-string">'./downloads/video'</span>)
  .then(() =&gt; <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Video downloaded successfully'</span>))
  .catch((error) =&gt; <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'Error downloading video:'</span>, error));
</code></pre>
<ul>
<li class="has-line-data" data-line-start="35" data-line-end="36">to download  the PDF</li>
</ul>
<pre><code class="has-line-data" data-line-start="37" data-line-end="43" class="language-javascript"><span class="hljs-comment">// Example: Download a PDF</span>
<span class="hljs-keyword">import</span> { downloadFile } <span class="hljs-keyword">from</span> <span class="hljs-string">'satyajit_med_downloader'</span>;
downloadFile(<span class="hljs-string">'https://example.com/document.pdf'</span>, <span class="hljs-string">'./downloads/document'</span>)
  .then(() =&gt; <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'PDF downloaded successfully'</span>))
  .catch((error) =&gt; <span class="hljs-built_in">console</span>.error(<span class="hljs-string">'Error downloading PDF:'</span>, error));
</code></pre>
<h2 class="code-line" data-line-start=49 data-line-end=50 ><a id="Author__Satyajit_Rakhunde_49"></a>Author : Satyajit Rakhunde</h2>
