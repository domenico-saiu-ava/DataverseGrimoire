---
logical: "documenttemplate"
display: "Document Template"
entitySetName: "documenttemplates"
primaryId: "documenttemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Document Template

Used to store Document Templates in database in binary format.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `documenttemplate` |
| Display name | Document Template |
| Display (plural) | Document Templates |
| Schema name | `DocumentTemplate` |
| Entity set (Web API) | `documenttemplates` |
| Primary id attribute | `documenttemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/documenttemplates?$select=name&$top=10
GET /api/data/v9.2/documenttemplates(<guid>)
POST /api/data/v9.2/documenttemplates
PATCH /api/data/v9.2/documenttemplates(<guid>)
DELETE /api/data/v9.2/documenttemplates(<guid>)
```

## Attributes

Writable: **9** · Read-only: **8**

### Writable

`AssociatedEntityTypeCode`, `ClientData`, `Content`, `Description`, `DocumentTemplateId`, `DocumentType`, `LanguageCode`, `Name`, `Status`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (5)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_documenttemplatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_documenttemplatebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_documenttemplatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_documenttemplatebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `lk_documenttemplatebase_organization` | [organization](organization.md) | `organizationid` | `organizationid` |



## Source

Generated from [documenttemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/documenttemplate.md) on 2026-05-06.