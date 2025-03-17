import { IPaging } from "../../../interface/paging.interface"
import paginate from "../../../utils/paginateQuery.utils"
import { ITemplate } from "../interfaces/templates.interfaces"
import templatesModel from "../models/templates.model"
import { FilterQuery } from "mongoose"

const createTemplate = (template: Partial<ITemplate>) => {
    return templatesModel.create(template)
}

const editTemplate = (id: string, template: ITemplate) => {
    return templatesModel.findByIdAndUpdate(id, template)
}

const getTemplateById = (id: string) => {
    return templatesModel.findById(id)
}

const updateTempalteStatus = (id: string) => {
    return templatesModel.findByIdAndUpdate(id, [{ $set: { inactive: { $not: 1 } } }]);
}

const getAllTemplates = (filter: FilterQuery<ITemplate>, { limit, page }: IPaging) => {
    return paginate(
        templatesModel as any,
        filter,
        page,
        limit,
        {
            updatedAt: -1,
        },
        []
    );
};


export default {
    createTemplate,
    editTemplate,
    getTemplateById,
    getAllTemplates,
    updateTempalteStatus
}