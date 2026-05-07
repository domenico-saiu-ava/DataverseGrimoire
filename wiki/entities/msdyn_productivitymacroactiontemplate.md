---
logical: "msdyn_productivitymacroactiontemplate"
display: "Macro Action Template"
entitySetName: "msdyn_productivitymacroactiontemplates"
primaryId: "msdyn_productivitymacroactiontemplateid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Macro Action Template

Attributes for macro action template

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacroactiontemplate` |
| Display name | Macro Action Template |
| Display (plural) | Macro Action Templates |
| Schema name | `msdyn_productivitymacroactiontemplate` |
| Entity set (Web API) | `msdyn_productivitymacroactiontemplates` |
| Primary id attribute | `msdyn_productivitymacroactiontemplateid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacroactiontemplates?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
POST /api/data/v9.2/msdyn_productivitymacroactiontemplates
PATCH /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacroactiontemplates(<guid>)
```

## Attributes

Writable: **25** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_actionDescription`, `msdyn_brandcolor`, `msdyn_displayname`, `msdyn_icon`, `msdyn_inputparameters`, `msdyn_kind`, `msdyn_macroconnector`, `msdyn_name`, `msdyn_outputparameters`, `msdyn_productivitymacroactiontemplateId`, `msdyn_runtimeapi`, `msdyn_subtitle`, `msdyn_summary`, `msdyn_title`, `msdyn_UniqueName`, `msdyn_visibility`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivitymacroactiontemplate` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivitymacroactiontemplate_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacroactiontemplate_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacroactiontemplate_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacroactiontemplate_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector` | [msdyn_productivitymacroconnector](msdyn_productivitymacroconnector.md) | `msdyn_macroconnector` | `msdyn_macroconnector` |
| `owner_msdyn_productivitymacroactiontemplate` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivitymacroactiontemplate` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivitymacroactiontemplate` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (10)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actioninput` | _n/a_ | `msdyn_actiontemplateinputparameterid` | _n/a_ |
| `msdyn_msdyn_prod_macroactiontemplate_msdyn_actionout` | _n/a_ | `msdyn_actiontemplateoutputparameterid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroactiontemplate_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_productivitymacroactiontemplate.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivitymacroactiontemplate.md) on 2026-05-06.