import { injectGlobal } from 'styled-components';

// Fonts
import PoppinsRegular from '../../assets/fonts/Poppins-Regular.ttf';
import PoppinsBold from '../../assets/fonts/Poppins-Bold.ttf';
import PoppinsLight from '../../assets/fonts/Poppins-Light.ttf';
import PoppinsSemiBold from '../../assets/fonts/Poppins-SemiBold.ttf';
import PoppinsBlack from '../../assets/fonts/Poppins-Black.ttf';

injectGlobal`
	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsRegular});
		font-weight: normal;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsBold});
		font-weight: bold;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsLight});
		font-weight: 300;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsSemiBold});
		font-weight: 600;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	@font-face {
		font-family: 'Poppins';
		src: url(${PoppinsBlack});
		font-weight: 900;
		font-style: normal;
		font-stretch: normal;
		line-height: normal;
		letter-spacing: normal;
	}

	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	body {
		font-family: 'Poppins';
	}
`;