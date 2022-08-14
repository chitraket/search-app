import moment from 'moment'
import React from 'react'

const UserInfo = ({data}) => {
    const {picture,name,email,phone,location,gender,dob} = data
  return (
    <section className="bg-white dark:bg-gray-800">
  <div className="container px-6 py-8 mx-auto">
    <div className="items-center lg:flex">
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">{name.title}. {name.first} {name.last}</h2>
        <p className="text-sky-500 font-bold text-xs mt-4"> {gender} </p>
        <p className="my-2 text-gray-400">{moment(dob?.date).format("MM-DD-YYYY")} ({dob?.age})</p>
        <nav className="list-none mb-10">
              <li className='my-2'>
                <a
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 hover:text-yellow-500"
                  href={
                    "mailto:" +
                    `${email
                      ? email
                      : "hi@gmail.com"
                    }`
                  }
                >
                  <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                      />
                    </svg>
                  <p className="ml-2">
                    {" "}
                    {email
                      ? email
                      : "hi@gmail.com"}
                  </p>
                </a>
              </li>
              <li className='my-2'>
                <a
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 hover:text-yellow-500"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    "https://wa.me/" +
                    `${phone
                      ? phone
                      : "017684 01465"
                    }`
                  }
                >
                  <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z"
                        fill="#000000"
                        opacity="0.3"
                      />
                      <path d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z" />
                    </svg>
                  <p className="ml-2">
                    {phone
                      ? phone
                      : "017684 01465"}
                  </p>
                </a>
              </li>
              <li className='my-2'>
                <a
                  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 hover:text-yellow-500"
                  target="_blank"
                  rel="noreferrer"
                  href={
                    `https://www.google.com/maps/place/${location?.coordinates?.latitude},${location?.coordinates?.longitude}`
                  }
                >
                  <svg
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
                      />
                    </svg>
                  <p className="ml-2">
                    {location
                      ? `${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country} `
                      : "017684 01465"}
                  </p>
                </a>
              </li>
            </nav>
      </div>
      <div className="mt-8 lg:mt-0 lg:w-1/2">
        <div className="flex items-center justify-center lg:justify-end">
          <div className="max-w-lg">
            <img className="object-cover object-center w-full h-64 rounded-md shadow" src={picture?.large} alt={name?.first} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default UserInfo