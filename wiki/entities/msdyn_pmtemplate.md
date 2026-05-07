---
logical: "msdyn_pmtemplate"
display: "PM Template"
entitySetName: "msdyn_pmtemplates"
primaryId: "msdyn_pmtemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# PM Template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_pmtemplate` |
| Display name | PM Template |
| Display (plural) | PM Templates |
| Schema name | `msdyn_pmtemplate` |
| Entity set (Web API) | `msdyn_pmtemplates` |
| Primary id attribute | `msdyn_pmtemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_pmtemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_pmtemplates(<guid>)
POST /api/data/v9.2/msdyn_pmtemplates
PATCH /api/data/v9.2/msdyn_pmtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_pmtemplates(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_author`, `msdyn_category`, `msdyn_configuration`, `msdyn_description`, `msdyn_icon`, `msdyn_iconname`, `msdyn_isprivatetemplate`, `msdyn_locale`, `msdyn_mashupscript`, `msdyn_name`, `msdyn_pmtemplateId`, `msdyn_subcategory`, `msdyn_templategroupid`, `msdyn_templateversion`, `msdyn_type`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_pmtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_pmtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_pmtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_pmtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_pmtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_pmtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_pmtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_pmtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_pmtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_pmtemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_pmtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_pmtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_pmtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_pmtemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_pmtemplate.md) on 2026-05-06.