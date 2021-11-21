import "./MenuButtonsFilters.css";
import { allFilters } from "../../redux/actions";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import { FROM_ALL, FROM_API, FROM_DB, FROM } from "../../constantes/constantes";
import { useSelector } from "react-redux";

export const MenuButtonsFilters = ({ active }) => {
  const [from] = useSelector((state) => [state.order, state.filterFrom]);
  return (
    <div className={`overlay ${!active ? "overlay_none" : ""}`}>
      <section className="buttons_menu">
        <ButtonDispatch
          text="ALL"
          name={FROM}
          value={FROM_ALL}
          action={allFilters}
          active={from === FROM_ALL}
        />
        <ButtonDispatch
          text="DB"
          name={FROM}
          value={FROM_DB}
          action={allFilters}
          active={from === FROM_DB}
        />
        <ButtonDispatch
          text="API"
          name={FROM}
          value={FROM_API}
          action={allFilters}
          active={from === FROM_API}
        />
      </section>
    </div>
  );
};
