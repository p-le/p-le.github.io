import React from "react"
import PropTypes from "prop-types"

const YouTubeVideo = ({ id, title }) => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

YouTubeVideo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
}

export default YouTubeVideo
