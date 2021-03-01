import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
      margin: theme.spacing(0),
      padding: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3),
        margin: theme.spacing(3),
      }
    },
  }));

export default function DefinitionDisplay() {
  const classes = useStyles();
  return (
    <Paper className={classes.container}>
      <Typography variant="h6">κομίζω</Typography>
      <Typography variant="subtitle1"> [κομέω]</Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText primary="Fut. κομιῶ ο 546. Aor. κόμισσα Λ 738. 3 sing. κόμισε Ξ 456, 463. ἐκόμισσε Β 183, 875, Ν 579: σ 322, υ 68. 3 pl. κόμισαν Γ 378, Ν 196, Ψ 699. 3 sing. subj. κομίσσῃ κ 298. Imp. κόμισσον π 82. 3 sing. aor. mid. ἐκομίσσατο Θ 284: ζ 278, ξ 316. 3 pl. κομίσαντο Α 594. 2 sing. opt. κομίσαιο Χ 286. Imp. κόμισαι Ε 359." />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="1. To tend, care for, minister to: οὐ κομιζόμενος θάμιζεν θ 451." />
        </ListItem>
        <ListItem>
          <ListItemText primary="2. To look after, care for, provide for, see to the welfare of, keep supplied the wants of: τὸν γηράσκοντα Ω 541. Cf. σ 322, υ 68, ω 251.--In mid.: κομίσσατό σ’ ᾧ ἐνὶ οἴκῳ Θ 284." />
        </ListItem>
        <ListItem>
          <ListItemText primary="3. To entertain hospitably ο 546, π 82, ρ 113." />
        </ListItem>
        <ListItem>
          <ListItemText primary="4. To come to the aid of, supply the needs of: οὔ μοι θέμις ἐστὶ κομιζέμεν ἄνδρα τὸν ὅς κε ... κ 73. Cf. κ 298.--In mid. Ε 359.--To pick up, rescue, come to the relief of, relieve the wants of. In mid.: Σίντιές μ’ ἄνδρες κομίσαντο Α 594. Cf. ζ 278, ξ 316." />
        </ListItem>
        <ListItem>
          <ListItemText primary="5. To attend to, ply (one's work): τὰ σ’ αὐτῆς ἔργα κόμιζε Ζ 490: = α 356 = φ 350." />
        </ListItem>
        <ListItem>
          <ListItemText primary="6. To pick up, take up from the ground: τρυφάλειαν Γ 378. Cf. Β 183, Ν 579.--To carry off as prize, seize upon: χρυσόν Β 875, ἵππους Λ 738.--To carry off, take rightful possession of: δέπας (i.e. as a prize) Ψ 699.--To carry off (corpses) from the enemy Ν 196.--To carry, take with one, convey: χηλόν ν 68." />
        </ListItem>
        <ListItem>
          <ListItemText primary="7. To receive (a missile in one's flesh): κόμισε χροῒ [ἄκοντα] Ξ 456.--In mid. Χ 286.--Sim.: κόμισεν [ἄκοντα] Ἀρχέλοχος Ξ 463." />
        </ListItem>
        <ListItem>
          <ListItemText primary="8. To guard, see to, look after, watch over: δῶμα π 74, υ 337, κτήματα ψ 355." />
        </ListItem>
      </List>
    </Paper>

  );
  }