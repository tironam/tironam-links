import PicWrap from './ProfilePic.styles';

type Props = {
	img: string;
	alt: string;
};

const ProfilePic: React.FC<Props> = ({ img, alt }) => (
	<PicWrap src={img} alt={alt} />
);

export default ProfilePic;
