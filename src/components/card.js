import React from "react"
import PropTypes from "prop-types"

const Card = () => {
  return (
    <div className="shadow-lg rounded-t-md overflow-hidden">
      <img
        className="w-sm"
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=60"
        alt=""
      />
      <div className="flex items-between ">
        <p className="text-lg font-semibold px-4">Basic how to ride your skateboard comfortly</p>
        <img
          className="h-12 w-12 rounded-full mx-4"
          src="https://raw.githubusercontent.com/p-le/p-le/main/assets/logo2.png"
          alt=""
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes,
}

export default Card
