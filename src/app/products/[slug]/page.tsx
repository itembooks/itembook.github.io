
import classNames from "classnames";
import { product } from "@/data/category/etc/product";

export default function Product({ params }: { params: { slug: string } }) {

    return (
      <div className=" bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              {
                product.breadcrumbs.map((breadcrumb) => (
                  <li key={breadcrumb.id}>
                    <div className="flex items-center">
                      <a href={breadcrumb.href}
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                      {breadcrumb.name}
                      </a>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>                      
                    </div>
                  </li>
                ))
              }
              <li className="text-sm">
                <a href={product.href}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>
          {/** product section-1 */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className=" aspect-h-4 aspect-w-3  overflow-hidden rounded-lg lg:block">
                <img src={product.images[0].src} alt={product.images[0].alt} 
                  className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 lg:border-r lg:border-gray-200 lg:pr-8">
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img src={product.images[1].src} alt={product.images[1].alt} 
                  className="h-full w-full object-cover object-center"
                />
              </div>            
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg ">
                <img src={product.images[2].src} alt={product.images[2].alt} 
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>            
            {/** Options */}
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:rounded-lg px-4 pt-3">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>              
              {/** product info */}
              {/** pric */}              
              <div className="mt-6">
                <p className="text-xl font-medium text-gray-900">구매정보</p>          
                <div className="flex flex-col">               
                {
                  
                  product.info.map((data) => (
                    <a href={data.href} className={classNames({
                      "flex justify-between mt-5 w-full rounded-lg border border-transparent": true,
                      "px-5 py-2 text-base font-medium text-white": true,
                      " bg-blue-500  hover:bg-blue-600 focus:ring-blue-500": data.site === 'coupang' ? true : false,
                      " bg-green-500  hover:bg-green-600 focus:ring-green-500": data.site === 'naver' ? true : false,
                      "focus:outline-none focus:ring-2  focus:ring-offset-2": true,
                    })}
                      target="_blank"
                    >
                      <span className="w-1/5">{data.name}</span>
                      <div className=" w-4/5 flex justify-end">{data.price} 원</div>   
                    </a>
                  ))
                }                                  
                </div>                             
              </div>
            </div>
          </div>

          
          {/** Product Info ===== */}
          <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 sm:px-6 ">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>            
            <div className="py-10 ">
              {/** Description and details */}
              <div>
                <h3 className="sr-only">Descripton</h3>
                
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {
                      product.highlights.map((highlight) => (
                        <li key={highlight} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }