---
logical: "msdyn_productivitymacroconnector"
display: "Macro Connector"
entitySetName: "msdyn_productivitymacroconnectors"
primaryId: "msdyn_productivitymacroconnectorid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Macro Connector

Attributes for macro connectors

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_productivitymacroconnector` |
| Display name | Macro Connector |
| Display (plural) | Macro Connectors |
| Schema name | `msdyn_productivitymacroconnector` |
| Entity set (Web API) | `msdyn_productivitymacroconnectors` |
| Primary id attribute | `msdyn_productivitymacroconnectorid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_productivitymacroconnectors?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
POST /api/data/v9.2/msdyn_productivitymacroconnectors
PATCH /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
DELETE /api/data/v9.2/msdyn_productivitymacroconnectors(<guid>)
```

## Attributes

Writable: **23** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_brandcolor`, `msdyn_callback`, `msdyn_categorykey`, `msdyn_categorylabel`, `msdyn_description`, `msdyn_displayname`, `msdyn_icon`, `msdyn_name`, `msdyn_prefix`, `msdyn_productivitymacroconnectorId`, `msdyn_title`, `msdyn_type`, `msdyn_UniqueName`, `msdyn_webresourcename`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_productivitymacroconnector` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_productivitymacroconnector_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_productivitymacroconnector_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_productivitymacroconnector_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_productivitymacroconnector_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `owner_msdyn_productivitymacroconnector` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_productivitymacroconnector` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_productivitymacroconnector` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_msdyn_Prod_macroconnector_msdyn_macroactiontemplate_macroconnector` | _n/a_ | `msdyn_macroconnector` | _n/a_ |
| `msdyn_productivitymacroconnector_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroconnector_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroconnector_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_productivitymacroconnector_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_productivitymacroconnector_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroconnector_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_productivitymacroconnector_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_productivitymacroconnector_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_productivitymacroconnector.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_productivitymacroconnector.md) on 2026-05-06.