interface CardProps {
  image: string;
  link: string;
  name: string;
  tags: string[];
}

export function Card({ image, link, name, tags }: CardProps) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-[#1e2a46] hover:-translate-y-5 transition-all duration-200">
      <figure><img src={image} alt={name} className='rounded-lg' /></figure>
      <div className="card-body">
        <h2 className="card-title flex-col">
          {name}
        </h2>
        <div className="card-actions justify-center">
          {
            tags.map((tag) => (
              <div className="badge badge-outline">{tag}</div>
            ))
          }
        </div>

        {/* download button */}
        <div className="btn-group mt-5 w-[174px]">
          <button className="btn hover:btn-active w-11/12" onClick={() => { window.open(link) }}>Download</button>
          <button className="btn hover:btn-active w-11/12" onClick={() => { window.open(name) }}>Read</button>
        </div>
      </div>
    </div>
  )
}