---
logical: "msdyn_intentfamily"
display: "Line of Business"
entitySetName: "msdyn_intentfamilies"
primaryId: "msdyn_intentfamilyid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "UserOwned"
---

# Line of Business

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_intentfamily` |
| Display name | Line of Business |
| Display (plural) | Lines of Business |
| Schema name | `msdyn_intentfamily` |
| Entity set (Web API) | `msdyn_intentfamilies` |
| Primary id attribute | `msdyn_intentfamilyid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_intentfamilies?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_intentfamilies(<guid>)
POST /api/data/v9.2/msdyn_intentfamilies
PATCH /api/data/v9.2/msdyn_intentfamilies(<guid>)
DELETE /api/data/v9.2/msdyn_intentfamilies(<guid>)
```

## Attributes

Writable: **18** · Read-only: **18**

### Writable

`ImportSequenceNumber`, `IsCustomizable`, `msdyn_CPAAutomationLevel`, `msdyn_defaultusergroup`, `msdyn_description`, `msdyn_intentbasedroutingenabled`, `msdyn_intentfamilyId`, `msdyn_iscaseintentfromactivityenabled`, `msdyn_isdefault`, `msdyn_isenabled`, `msdyn_Name`, `OverriddenCreatedOn`, `OwnerId`, `OwnerIdType`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`ComponentIdUnique`, `ComponentState`, `CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `IsManaged`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OverwriteTime`, `OwnerIdName`, `OwnerIdYomiName`, `OwningBusinessUnit`, `OwningTeam`, `OwningUser`, `SolutionId`, `SupportingSolutionId`, `VersionNumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `business_unit_msdyn_intentfamily` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `lk_msdyn_intentfamily_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_intentfamily_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_intentfamily_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_intentfamily_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_intentfamily_msdyn_defaultusergroup_msdyn_agentgroup` | [msdyn_agentgroup](msdyn_agentgroup.md) | `msdyn_defaultusergroup` | `msdyn_defaultusergroup` |
| `owner_msdyn_intentfamily` | [owner](owner.md) | `ownerid` | `ownerid` |
| `team_msdyn_intentfamily` | [team](team.md) | `owningteam` | `owningteam` |
| `user_msdyn_intentfamily` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |

### One-to-Many (21)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_agentgroup_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intent_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentattribute_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentattributeset_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentconfig_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intententity_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentfamily_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfamily_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfamily_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_intentfamily_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_intentfamily_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfamily_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_intentfamily_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentfamily_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_intentgroupcondition_msdyn_intentfamily_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamily` | _n/a_ |
| `msdyn_intentplaybook_msdyn_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentplaybookmap_msdyn_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_intentsolutionmap_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_liveworkstream_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |
| `msdyn_msdyn_ocliveworkitem_msdyn_intentfamily_activeintentfamilyid` | _n/a_ | `msdyn_activeintentfamilyid` | _n/a_ |
| `Queue_intentfamilyid_msdyn_intentfamily` | _n/a_ | `msdyn_intentfamilyid` | _n/a_ |


## Source

Generated from [msdyn_intentfamily.md](https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/developer/reference/entities/msdyn_intentfamily.md) on 2026-05-06.