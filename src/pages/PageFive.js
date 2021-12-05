import { useEffect } from 'react';
// material
import { Container, Grid, Skeleton } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../redux/store';
import { getUsers } from '../redux/slices/user';
// routes
import { PATH_DASHBOARD } from '../routes/paths';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';
import { UserCard } from '../components/cards';

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(8)].map((_, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

export default function UserCards() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Page title="Unix Gaming Team">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <Grid container spacing={3}>
          {/* {users.map((user) => ( */}

          <UserCard />
          {/* ))} */}

          {!users.length && SkeletonLoad}
        </Grid>
      </Container>
    </Page>
  );
}
