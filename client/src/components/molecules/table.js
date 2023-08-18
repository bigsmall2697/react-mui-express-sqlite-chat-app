import {
  LinearProgress, Table,
  TableBody
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 0,
  },
  inner: {
    minWidth: 1050,
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  actions: {
    justifyContent: 'space-between',
  },
  actionCell: {
    width: '200px',
  },
  circularLoader: {
    marginLeft: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const PaginatedTable = ({ renderRow, items, loading, renderHeader }) => {
  const classes = useStyles();
  return (
    <>
      {loading && <LinearProgress />}
    
      <Table className={classes.root}>
        {renderHeader()}
        <TableBody>
          {(items || []).map(renderRow)}
        </TableBody>
      </Table>

    </>
  );
};

export default PaginatedTable;