const MiniImageShadow = ({ onClick, image, active }) => {
    return (
        <img
            onClick={onClick}
            src={image}
            className={`min-w-24 h-auto mb-4 cursor-pointer
            transition-all duration-300 hover:shadow-[0px_5px_9px_0px_rgba(0,0,0,0.8)]
            ${active ? 'shadow-[0px_5px_9px_0px_rgba(0,0,0,0.8)]' : 'shadow-none'}
      `}
        />
    );
};

export default MiniImageShadow;