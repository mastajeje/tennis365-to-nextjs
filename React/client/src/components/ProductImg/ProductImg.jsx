const ProductImg = ({className,imgURL, productName}) => {
  return (
    <div className={className}>
      <img
        src={imgURL}
        // src={`https://tennis365-api.herokuapp.com/admin/${props.item.imgUrl}`}
        alt={productName}
      />
    </div>
  );
};

export default ProductImg;
