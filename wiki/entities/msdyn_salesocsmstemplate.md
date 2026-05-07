---
logical: "msdyn_salesocsmstemplate"
display: "Text message template"
entitySetName: "msdyn_salesocsmstemplates"
primaryId: "msdyn_salesocsmstemplateid"
primaryName: "msdyn_title"
tableType: "Standard"
ownership: "UserOwned"
---

# Text message template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_salesocsmstemplate` |
| Display name | Text message template |
| Display (plural) | Text message templates |
| Schema name | `msdyn_salesocsmstemplate` |
| Entity set (Web API) | `msdyn_salesocsmstemplates` |
| Primary id attribute | `msdyn_salesocsmstemplateid` |
| Primary name attribute | `msdyn_title` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_salesocsmstemplates?$select=msdyn_title&$top=10
GET /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
POST /api/data/v9.2/msdyn_salesocsmstemplates
PATCH /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
DELETE /api/data/v9.2/msdyn_salesocsmstemplates(<guid>)
```

## Attributes

Writable: **16** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_category`, `msdyn_language`, `msdyn_placeholders`, `msdyn_salesocsmstemplateId`, `msdyn_templatetext`, `msdyn_title`, `msdyn_viewableBy`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_salesocsmstemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_salesocsmstemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_salesocsmstemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_salesocsmstemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_salesocsmstemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_salesocsmstemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_salesocsmstemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_salesocsmstemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_salesocsmstemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocsmstemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocsmstemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_salesocsmstemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_salesocsmstemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocsmstemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_salesocsmstemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_salesocsmstemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_salesocsmstemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_salesocsmstemplate.md) on 2026-05-06.