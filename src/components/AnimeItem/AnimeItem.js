import "./AnimeItem.sass"
import {Link} from "react-router-dom";


const AnimeItem = ({title, images, members, favorites, id}) => {
	
	
	return (
		<div className='AnimeItem'>
			<Link to={`/anime/${id}`} className="AnimeItem_Image">
				{images && images.webp
					? (<img src={images.webp.image_url} alt=""/>)
					: (<span>Ошибка при загрузке</span>)}
			</Link>
			<div className="AnimeItem_Title">
				<span>{title}</span>
			</div>
			<div className="AnimeItem_Info">
				<div className="AnimeItem_Views">
					<span>{members}</span>
				</div>
				<div className="AnimeItem_Stars">
					<span>{favorites}</span>
				</div>
			</div>
		</div>
	);
};

export default AnimeItem;