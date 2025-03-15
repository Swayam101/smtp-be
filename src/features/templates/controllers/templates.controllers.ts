import { asyncWrapper } from "../../../utils/asyncWrapper";
import createTemplate from "./createTemplate.controller";
import editTemplate from "./editTemplate.controller";
import getAllTempaltesController from "./getAllTempaltes.controller";
import getTemplateByIdController from "./getTemplateById.controller";

export default {
    createTemplate: asyncWrapper(createTemplate),
    editTemplate: asyncWrapper(editTemplate),
    getTemplateById: asyncWrapper(getTemplateByIdController),
    getAllTempaltes: asyncWrapper(getAllTempaltesController)
}