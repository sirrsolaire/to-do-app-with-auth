import { Spinner } from "./Spinner.jsx";

export const Form = ({
  placeholder,
  buttonTitle,
  icon,
  handlesubmit,
  text,
  setText,
  isPending,
  addClass,
}) => {
  return (
    <form className="flex flex-col gap-2" onSubmit={handlesubmit}>
      <input
        type="text"
        autoFocus={true}
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={`py-3.5 bg-[#262626] rounded-lg px-4 text-white shadow-md placeholder:opacity-70 ${addClass}`}
        placeholder={placeholder}
        disabled={isPending}
      />
      <button
        disabled={isPending}
        className={`shadow-md flex items-center  bg-[#1e6f9f] py-3.5 rounded-lg justify-center text-white font-semibold disabled:opacity-70 hover:bg-[#4ea8de] duration-200 transition-colors ${addClass}`}
      >
        {isPending ? (
          <Spinner />
        ) : (
          <div className="flex items-center gap-1">
            {buttonTitle}
            {icon}
          </div>
        )}
      </button>
    </form>
  );
};
