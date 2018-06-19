import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';
import { reduxForm, Field } from 'redux-form/immutable';
import SearchInput from '../../../../commons/inputs/search';
import styles from './styles';
import Character from './character';

@reduxForm({ form: 'characters' })
@withStyles(styles)
export default class Characters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: null,
    };

    this.filterCharactersByName = this.filterCharactersByName.bind(this);
  }

  filterCharactersByName(characters, name) {
    return name ?
      characters.get('results').toList().filter(character => character.get('name').includes(name))
      : characters.get('results').toList();
  }

  render() {
    const { characters, classes } = this.props;
    const { filter } = this.state;
    const filteredCharacters = this.filterCharactersByName(characters, filter);

    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Grid item xs={12}>
                <Typography variant="title">
                  Characters
                </Typography>
              </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container spacing={16}>
                <Grid item xs={12}>
                  <Field
                    component={SearchInput}
                    name="name"
                    label="Search a character"
                    onChange={(e, f) => this.setState({ filter: f })}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={16}>
                    {filteredCharacters.map(character => (
                      <Grid key={character.get('id')} className={classes.characterItem} item xs={12}>
                        <Character name={character.get('name')} thumbnail={character.get('thumbnail')} />
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Grid>
      </Grid>
    );
  }
}
