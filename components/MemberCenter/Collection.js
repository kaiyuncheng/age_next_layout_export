import CollectList from './CollectList'
import Link from 'next/link';

const Collection = ({topics}) => {
  return (
    <div className="rounded-lg rounded-br-6xl border border-secondary-medium shadow-md overflow-hidden h-full w-full">
      <div className="relative border-b border-dashed border-secondary-medium p-3 flex justify-center items-center">
        <h2 className="text-center text-lg font-medium">文章收藏</h2>
      </div>
      <div className="w-full px-3 py-10 xs:px-5 sm:px-10 lg:py-20 lg:px-20">
        <CollectList topics={topics} />
      </div>
    </div>
  );
};

export default Collection;
