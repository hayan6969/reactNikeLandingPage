import { NavLink } from "react-router-dom";
const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex max-xl:mb-3  justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      <NavLink to="reactNikeLandingPage/shop" className='flex'>
      {label}

{iconURL && (
  <img
    src={iconURL}
    alt='arrow right icon'
    className='ml-2 rounded-full bg-white w-5 h-5'
  />
)}
      </NavLink>
    </button>
  );
};

export default Button;