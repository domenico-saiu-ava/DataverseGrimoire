---
logical: "msdyn_dataflowtemplate"
display: "Dataflow Template"
entitySetName: "msdyn_dataflowtemplates"
primaryId: "msdyn_dataflowtemplateid"
primaryName: "msdyn_uniquename"
tableType: "Standard"
ownership: "UserOwned"
---

# Dataflow Template

An entity to store information about dataflow templates

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_dataflowtemplate` |
| Display name | Dataflow Template |
| Display (plural) | Dataflow Templates |
| Schema name | `msdyn_DataflowTemplate` |
| Entity set (Web API) | `msdyn_dataflowtemplates` |
| Primary id attribute | `msdyn_dataflowtemplateid` |
| Primary name attribute | `msdyn_uniquename` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_dataflowtemplates?$select=msdyn_uniquename&$top=10
GET /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
POST /api/data/v9.2/msdyn_dataflowtemplates
PATCH /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
DELETE /api/data/v9.2/msdyn_dataflowtemplates(<guid>)
```

## Attributes

Writable: **21** · Read-only: **21**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_Category`, `msdyn_Configuration`, `msdyn_DataflowTemplateId`, `msdyn_Description`, `msdyn_HelpLink`, `msdyn_IsDisabled`, `msdyn_MashupDocument`, `msdyn_TemplateIcon`, `msdyn_TemplateName`, `msdyn_TemplateState`, `msdyn_TemplateVersion`, `msdyn_UniqueName`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `msdyn_TemplateIcon_Timestamp`, `msdyn_TemplateIcon_URL`, `msdyn_TemplateIconId`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_dataflowtemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_dataflowtemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_dataflowtemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_dataflowtemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_dataflowtemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_dataflowtemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_dataflowtemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_dataflowtemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_dataflowtemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowtemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowtemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowtemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_dataflowtemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_dataflowtemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_dataflowtemplate.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_dataflowtemplate.md) on 2026-05-06.