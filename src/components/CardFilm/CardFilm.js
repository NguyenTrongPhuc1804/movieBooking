import React from "react";

export default function CardFilm(props) {
  const { film } = props;
  return (
    <article className="card rounded-lg ">
      <header className="card__thumb">
        <a href="#">
          <img src={film.hinhAnh} />
        </a>
      </header>
      {/* <date className="card__date">
        <span className="card__date__day">11</span>
        <br />
        <span className="card__date__month">Jan</span>
      </date> */}
      <div className="card__body">
        <div className="card__category">
          {film.dangChieu ? <span>đang chiếu</span> : <span>sắp chiếu</span>}
        </div>
        <h2 className="text-sm card__title truncate ... text-white">
          {film.tenPhim}
        </h2>
        <button className="mt-3 bg-transparent hover:bg-[#ff7f50] text-[#ff7f50] font-semibold hover:text-white py-2 px-4 border border-[#ff7f50] hover:border-transparent rounded">
          Đặt vé
        </button>
        <p className="card__description">
          {film.moTa.length > 100 ? (
            <span>{film.moTa.slice(0, 100)}...</span>
          ) : (
            <span>{film.moTa}</span>
          )}
        </p>
      </div>
      <footer className="card__footer">
        <span className="icon ion-clock" /> 10 mins ago
        <span className="icon ion-chatbox" />
        <a href="#"> 145 comments</a>
      </footer>
    </article>
  );
}
