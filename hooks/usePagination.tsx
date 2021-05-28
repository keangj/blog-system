import _ from "lodash";
import Link from "next/link";

type Options = {
  page: number;
  totalPage: number;
  urlMaker?: (n: number) => string
}

const defaultUrlMaker = (n: number) => `?page=${n}`;

export function usePagination (options: Options) {
  const { page, totalPage, urlMaker } = options;
  const number = [];
  const _urlMaker = urlMaker || defaultUrlMaker;
  number.push(1);
  for (let i = page - 3; i <= page + 3; i++ ) {
    number.push(i)
  }
  number.push(totalPage);
  const pageNumbers = _.uniq(number.sort((a, b)=> a-b)).filter(n => n > 0 && n <= totalPage)
  .reduce((result, n) => n - (result[result.length - 1] || 0) === 1 ? result.concat(n) : result.concat(-1, n), [])
  return (
    <div>
      第 {page}/{totalPage} 页
      {page > 1 && <Link href={_urlMaker(page - 1)}><a>{'<'}</a></Link>}
      {
        pageNumbers.map((n, index) =>
          <span key={index}>
            {n === -1 ?
            <span>···</span> :
            <Link href={_urlMaker(n)}><a>{n}</a></Link>}
          </span>
        )
      }
      {page < totalPage && <Link href={_urlMaker(page + 1)}><a>{'>'}</a></Link>}
    </div>
  )
} 