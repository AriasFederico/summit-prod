import { Link } from 'react-router-dom';
import './styles/Logo.scss';
export const Logo = ({ className, svg, click }) => {
	return (
		<Link className={`Logo ${className}`} onClick={click} to={'/'}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='1em'
				height='1em'
				viewBox='0 0 24 24'
				className={svg}
			>
				<path
					fill='none'
					stroke='currentColor'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
					d='m8 3l4 8l5-5l5 15H2z'
				/>
			</svg>
			Summit.
		</Link>
	);
};
