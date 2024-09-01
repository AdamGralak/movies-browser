import React from "react";
import { StyledPaginator } from "./styled";

const Paginator = () => {

    return(
<>
<StyledPaginator>
<button>Przejdź do pierwszej strony</button>
<button>Poprzednia strona</button>
<span> aktualna strona: </span>
<button>Następna strona</button>
<button>Przejdź do ostatniej strony</button>
</StyledPaginator>
</>
    );
};

export default Paginator;