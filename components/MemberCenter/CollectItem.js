import Link from "next/link";
import Image from "next/image";

const CollectItem = ({ item }) => {
  return (
    <div className="flex md:flex-row flex-col relative">
      <Link href={`/article/${item.url_query}`}>
        <a className="group block rounded-lg overflow-hidden w-full md:w-1/3 outline-none focus:outline-none">
          <Image
            className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-all duration-500 ease-in-out"
            src={item.image_url}
            height={300}
            width={400}
            layout="responsive"
            alt={item.title}
          />
        </a>
      </Link>

      <div className="w-full md:w-2/3 p-5 md:px-5 md:py-0 flex flex-col">
        <Link href={`/article/${item.url_query}`}>
          <a className="block mb-5 outline-none focus:outline-none">
            <h2 className="text-xl font-bold hover:text-gray-600">
              {item.title}
            </h2>
          </a>
        </Link>

        <p className="text-base mb-5">{item.minor_title}</p>

        <Link href={`/article/${item.url_query}`}>
          <a className="group absolute bottom-0 right-5 z-30 text-gray-800 hover:text-primary-dark inline-flex items-center justify-center transition-all duration-300 ease-in-out outline-none focus:outline-none">
            <p className="mr-2">取消收藏</p>
            <div>
              <svg
              className="fill-current text-gray-800 group-hover:text-primary-dark transform"
                
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="18px"
                height="18px"
              >
                <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z" />
              </svg>
            </div>
          </a>
        </Link>
      </div>
      <div className="absolute -bottom-5 right-0 border-b border-r border-secondary-medium rounded-br-6xl w-full p-5"></div>
    </div>
  );
};

export default CollectItem;
