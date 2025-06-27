import React from "react";

export const Footer = () => {
    return (
        <footer>
            <h3 className="footer__title">Cine UNIR-CINEMA</h3>
            <table className="footer__table">
                <tbody>
                    <tr>
                        <td className="table__label">Dirección:</td>
                        <td>Calle Avenida de la Paz, 137. Logroño</td>
                    </tr>
                    <tr>
                        <td className="table__label">Teléfono:</td>
                        <td>941209743</td>
                    </tr>
                    <tr>
                        <td className="table__label">Email:</td>
                        <td>cinefullstack@unircinema.com</td>
                    </tr>
                </tbody>
            </table>
        </footer>
    );
}