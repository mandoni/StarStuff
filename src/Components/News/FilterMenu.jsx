import { Card, ListItem, ListItemText } from '@material-ui/core'
import React, { Fragment } from 'react'
import './News.css'
function FilterMenu() {
    return (
        <div className="filtros">
            <Fragment className="carta">
                <ListItem>
                <ListItemText>
                    <Card className="tarjeta-nav">
                        Todas las noticias (11)
                    </Card>
                    <Card className="tarjeta-nav">
                        Espacio (2)
                    </Card>
                    <Card className="tarjeta-nav">
                         Tecnología(2)
                    </Card>
                    <Card className="tarjeta-nav">
                        Biología(3)
                    </Card>
                    <Card className="tarjeta-nav">
                        Filosofía (2)
                    </Card>
                    <Card className="tarjeta-nav">
                        Sociedad (1)
                    </Card>
                    <Card className="tarjeta-nav">
                        Física (1)
                    </Card>
                    </ListItemText>
                </ListItem>
            </Fragment>
        </div>
    )
}

export default FilterMenu
