---
logical: "personaldocumenttemplate"
display: "Personal Document Template"
entitySetName: "personaldocumenttemplates"
primaryId: "personaldocumenttemplateid"
primaryName: "name"
tableType: "Standard"
ownership: "UserOwned"
---

# Personal Document Template

Used to store Personal Document Templates in database in binary format.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `personaldocumenttemplate` |
| Display name | Personal Document Template |
| Display (plural) | Personal Document Templates |
| Schema name | `PersonalDocumentTemplate` |
| Entity set (Web API) | `personaldocumenttemplates` |
| Primary id attribute | `personaldocumenttemplateid` |
| Primary name attribute | `name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/personaldocumenttemplates?$select=name&$top=10
GET /api/data/v9.2/personaldocumenttemplates(<guid>)
POST /api/data/v9.2/personaldocumenttemplates
PATCH /api/data/v9.2/personaldocumenttemplates(<guid>)
DELETE /api/data/v9.2/personaldocumenttemplates(<guid>)
```

## Attributes

Writable: **11** · Read-only: **11**

### Writable

`AssociatedEntityTypeCode`, `ClientData`, `Content`, `Description`, `DocumentType`, `LanguageCode`, `Name`, `OwnerId`, `OwnerIdType`, `PersonalDocumentTemplateId`, `Status`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OwnerIdName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_personaldocumenttemplates` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_personaldocumenttemplatebase_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_personaldocumenttemplatebase_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_personaldocumenttemplatebase_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_personaldocumenttemplatebase_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_personaldocumenttemplates` | [owner](owner.md) | `ownerid` | `ownerid` |



## Source

Generated from [personaldocumenttemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/personaldocumenttemplate.md) on 2026-05-06.