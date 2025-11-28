import React from 'react';
import catSrc from "../../assets/cat.png"

type Props = {
size?: number;
primary?: string; 
src?: string; 
};

const CatAnimated: React.FC<Props> = ({
    size = 80,
    primary = '#000',
    src = catSrc,
    }) => {
    const avatarStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderColor: primary,
};


return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
    <img
    src={src}
    alt="Mascote Boas Vindas"
    className="rounded-2xl overflow-hidden border animate-float hover:scale-110 duration-300 ease-in-out"
    style={avatarStyle}
    />
    </div>
);
};


export default CatAnimated;