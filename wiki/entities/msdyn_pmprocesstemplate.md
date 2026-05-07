---
logical: "msdyn_pmprocesstemplate"
display: "PM Process Template"
entitySetName: "msdyn_pmprocesstemplates"
primaryId: "msdyn_pmprocesstemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Process Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmprocesstemplate` |
| Display name | PM Process Template |
| Display (plural) | PM Process Templates |
| Schema name | `msdyn_pmprocesstemplate` |
| Entity set (Web API) | `msdyn_pmprocesstemplates` |
| Primary id attribute | `msdyn_pmprocesstemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmprocesstemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
POST /api/data/v9.2/msdyn_pmprocesstemplates
PATCH /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
DELETE /api/data/v9.2/msdyn_pmprocesstemplates(<guid>)
```

## Attributes

Writable: **15** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_name`, `msdyn_pminferredtaskid`, `msdyn_pmprocesstemplateId`, `msdyn_processdataflowconfig`, `msdyn_processmashupscript`, `msdyn_processminingmetadataconfig`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmprocesstemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmprocesstemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmprocesstemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmprocesstemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmprocesstemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_pminferredtask_msdyn_pmprocesstemplate_pmnferredtaskid` | [msdyn_pminferredtask](msdyn_pminferredtask.md) | `msdyn_pminferredtaskid` | `msdyn_pminferredtaskid` |
| `owner_msdyn_pmprocesstemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmprocesstemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmprocesstemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmprocesstemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocesstemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocesstemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmprocesstemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmprocesstemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocesstemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmprocesstemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmprocesstemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmprocesstemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmprocesstemplate.md) on 2026-05-06.