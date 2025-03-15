import { IPaging } from "../../../interface/paging.interface"
import paginate from "../../../utils/paginateQuery.utils"
import { ITemplate } from "../interfaces/templates.interfaces"
import templatesModel from "../models/templates.model"

const createTemplate = (template: ITemplate) => {
    return templatesModel.create(template)
}

const editTemplate = (id: string, template: ITemplate) => {
    return templatesModel.findByIdAndUpdate(id, template)
}

const getTemplateById = (id: string) => {
    return templatesModel.findById(id)
}

const getAllTemplates = ({ limit, page }: IPaging) => {
    return paginate(
        templatesModel as any,
        {},
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
    getAllTemplates
}