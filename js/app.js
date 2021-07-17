// Blog
let tar = document.querySelector("#blog")
let get_blog = async () => {
    try {
        // get data
        let url = "https://dev.to/api/articles?username=piyushlinux"
        let raw = await fetch(url)
        let data = await raw.json()
        let blogs = {}
        // filter data
        let insert_blog = () => {
            // loop
            for (var key in data) {
                var blog = {
                    img: data[key].cover_image,
                    title: data[key].title,
                    created: data[key].published_at,
                    tags: data[key].tag_list,
                    user: data[key].user.name,
                    link: data[key].canonical_url
                }
                blogs[key] = blog;
            }
            return blogs
        }
        // send data nxt()
        return insert_blog()
    } catch (err) {
        console.log(err)
    }
}

let render_blog = async () => {
    // get data
    let blog = await get_blog()
    // crt template
    var temp = '';
    for (var key in blog) {
        temp = `<a href="${blog[key].link}">
        <div class="card">
 		 <div class="card-image">
	    <figure class="image">
	      <img src="${blog[key].img}" alt="Placeholder image">
 	   </figure>
	  </div>
	  <div class="card-content">
  	  <div class="media">
      
      <div class="media-content">
        <p class="title is-4">${blog[key].title}</p>
        <p class="subtitle is-6">@piyushlinux</p>
      </div>
    </div>

    <div class="content">
    <div class="tags">
      <div class="tag is-danger mx-2"> ${blog[key].tags[0]} </div>
      <div class="tag is-success mx-2"> ${blog[key].tags[1]} </div>
      <div class="tag is-dark mx-2"> ${blog[key].tags[2]} </div>
    </div>
      <br>
      <time datetime="2016-1-1">${blog[key].created}</time>
  	 	 </div>
 		 </div>
 		 </div>
		</a>`

    }
    // append into html
    tar.children[key].innerHTML = temp
}
render_blog()