import "./MenuButtonsOrder.css";
import { sortGames} from "../../redux/actions";
import { ButtonDispatch } from "../ButtonDispatch/ButtonDispatch";
import {
  ASC,
  DESC,
  MAYOR,
  MINOR,
} from "../../constantes/constantes";
import { useSelector } from "react-redux";

export const MenuButtonsOrder = ({ active }) => {
  const [order] = useSelector((state) => [state.order]);
  return (
    <div className={`overlay ${!active ? "overlay_none" : ""}`}>
      <section className="buttons_menu">
      <ButtonDispatch
            icon="orderAZ"
            name={ASC}
            value={ASC}
            action={sortGames}
            active={order === ASC}
          />
          <ButtonDispatch
            icon="orderZA"
            name={DESC}
            value={DESC}
            action={sortGames}
            active={order === DESC}
          />
          <ButtonDispatch
            icon="order19"
            name={MINOR}
            value={MINOR}
            action={sortGames}
            active={order === MINOR}
          />
          <ButtonDispatch
            icon="order91"
            name={MAYOR}
            value={MAYOR}
            action={sortGames}
            active={order === MAYOR}
          />
      </section>
    </div>
  );
};
