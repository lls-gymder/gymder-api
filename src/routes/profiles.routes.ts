import { ensureAuthenticated } from '@middlewares/ensure-authenticated';
import { CreateProfileController } from '@modules/profiles/use-cases/create-profile/controller';
import { EditProfileController } from '@modules/profiles/use-cases/edit-profile/controller';
import { ReadProfileController } from '@modules/profiles/use-cases/read-profile/controller';
import { Router } from 'express';

const profilesRoutes = Router();

profilesRoutes.post('/', ensureAuthenticated, new CreateProfileController().handle);
profilesRoutes.put('/', ensureAuthenticated, new EditProfileController().handle);
profilesRoutes.get('/', ensureAuthenticated, new ReadProfileController().handle);

export { profilesRoutes };