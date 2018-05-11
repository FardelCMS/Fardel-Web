axios = require('axios')
auth = require('./auth')

async function getPosts(context) {	
  let perPage = context.route.query.per_page || 10
  let page = context.route.query.per_page || 1

  let data = await axios.get("/api/blog/posts/?per_page=" + perPage + "&page=" + page)
  return {
    posts: data.posts,
    currentPage: Number(page),
    currentPerPage: Number(perPage),
    pages: data.pages
  }
}

/** Get posts */
async function getPost(post_id) {
  let response = await axios.get("/api/blog/posts/" + post_id + "/")
  return {
    post: response.post
  }
}

async function getPost(post_id) {
  let response = await axios.get("/api/blog/posts/" + post_id + "/")
  return {
    post: response.post
  }
}

async function postComment(post_id, data) {
	if (auth.isAuthenticated) {
	  let response = await auth.post(
	  	"/api/blog/posts/" + post_id + "/comments/",
	  	{
	  		"content": data.content,
	  		"parent_comment_id": data.parent_comment_id
	  	}
	  )
	} else {
	  let response = await axios.post(
	  	"/api/blog/posts/" + post_id + "/comments/",
	  	{
	  		"author_name": data.author_name,
	  		"author_email": data.author_email,
	  		"content": data.content,
	  		"parent_comment_id": data.parent_comment_id
	  	}
	  )
	}
  return response
}

module.exports = function Blog(moduleOptions) {
	return {
		getPosts: getPosts,
		getPost: getPost,
		postComment: postComment,
	}
}