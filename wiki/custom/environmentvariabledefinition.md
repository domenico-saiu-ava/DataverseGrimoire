---
logical: "environmentvariabledefinition"
display: "Environment Variable Definition"
entitySetName: "environmentvariabledefinitions"
primaryId: "environmentvariabledefinitionid"
primaryName: "schemaname"
tableType: "Standard"
ownership: "UserOwned"
source: "custom"
envHost: "crmoperativodevevo.crm4.dynamics.com"
---

# Environment Variable Definition

Contains information about the settable variable: its type, default value, and etc.

## Identity

| Property | Value |
| --- | --- |
| Logical name | `environmentvariabledefinition` |
| Display name | Environment Variable Definition |
| Display (plural) | Environment Variable Definitions |
| Schema name | `EnvironmentVariableDefinition` |
| Entity set (Web API) | `environmentvariabledefinitions` |
| Primary id attribute | `environmentvariabledefinitionid` |
| Primary name attribute | `schemaname` |
| Table type | Standard |
| Ownership | UserOwned |

## Web API examples

```http
GET /api/data/v9.2/environmentvariabledefinitions?$select=schemaname&$top=10
GET /api/data/v9.2/environmentvariabledefinitions(<guid>)
POST /api/data/v9.2/environmentvariabledefinitions
PATCH /api/data/v9.2/environmentvariabledefinitions(<guid>)
DELETE /api/data/v9.2/environmentvariabledefinitions(<guid>)
```

## Attributes

Writable: **25** · Read-only: **16**

### Writable

`apiid`, `connectionreferenceid`, `defaultvalue`, `description`, `displayname`, `environmentvariabledefinitionid`, `hint`, `importsequencenumber`, `inputcontrolconfig`, `introducedversion`, `iscustomizable`, `isrequired`, `learnmoreurl`, `overriddencreatedon`, `ownerid`, `parameterkey`, `parentdefinitionid`, `schemaname`, `secretstore`, `statecode`, `statuscode`, `timezoneruleversionnumber`, `type`, `utcconversiontimezonecode`, `valueschema`

### Read-only

`componentstate`, `createdby`, `createdon`, `createdonbehalfby`, `environmentvariabledefinitionidunique`, `ismanaged`, `modifiedby`, `modifiedon`, `modifiedonbehalfby`, `overwritetime`, `owningbusinessunit`, `owningteam`, `owninguser`, `solutionid`, `supportingsolutionid`, `versionnumber`

## Relationships

### Many-to-One (9)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_environmentvariabledefinition_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_environmentvariabledefinition_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_environmentvariabledefinition_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_environmentvariabledefinition_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `user_environmentvariabledefinition` | [systemuser](systemuser.md) | `owninguser` | `owninguser` |
| `team_environmentvariabledefinition` | [team](team.md) | `owningteam` | `owningteam` |
| `owner_environmentvariabledefinition` | [owner](owner.md) | `ownerid` | `ownerid` |
| `business_unit_environmentvariabledefinition` | [businessunit](businessunit.md) | `owningbusinessunit` | `owningbusinessunit` |
| `envdefinition_envdefinition` | [environmentvariabledefinition](environmentvariabledefinition.md) | `parentdefinitionid` | `ParentDefinitionId` |

### One-to-Many (22)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `mspp_environmentvariabledefinition_mspp_sitesetting_environmentvariable` | [environmentvariabledefinition](environmentvariabledefinition.md) | `mspp_environmentvariable` | `EnvironmentValue` |
| `environmentvariabledefinition_SyncErrors` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariabledefinition_DuplicateMatchingRecord` | [environmentvariabledefinition](environmentvariabledefinition.md) | `duplicaterecordid` | `duplicaterecordid_environmentvariabledefinition` |
| `environmentvariabledefinition_DuplicateBaseRecord` | [environmentvariabledefinition](environmentvariabledefinition.md) | `baserecordid` | `baserecordid_environmentvariabledefinition` |
| `environmentvariabledefinition_AsyncOperations` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariabledefinition_MailboxTrackingFolders` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariabledefinition_UserEntityInstanceDatas` | [environmentvariabledefinition](environmentvariabledefinition.md) | `objectid` | `objectid_environmentvariabledefinition` |
| `environmentvariabledefinition_ProcessSession` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariabledefinition_BulkDeleteFailures` | [environmentvariabledefinition](environmentvariabledefinition.md) | `regardingobjectid` | `regardingobjectid_environmentvariabledefinition` |
| `environmentvariabledefinition_PrincipalObjectAttributeAccesses` | [environmentvariabledefinition](environmentvariabledefinition.md) | `objectid` | `objectid_environmentvariabledefinition` |
| `environmentvariabledefinition_environmentvariablevalue` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinitionId` |
| `envdefinition_envdefinition` | [environmentvariabledefinition](environmentvariabledefinition.md) | `parentdefinitionid` | `ParentDefinitionId` |
| `environmentvariabledefinition_flowmachinenetwork_domainpassword` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainpassword` | `DomainPassword` |
| `environmentvariabledefinition_flowmachinenetwork_domainusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `domainusername` | `DomainUsername` |
| `environmentvariabledefinition_credential_password` | [environmentvariabledefinition](environmentvariabledefinition.md) | `password` | `password` |
| `environmentvariabledefinition_credential_username` | [environmentvariabledefinition](environmentvariabledefinition.md) | `username` | `username` |
| `environmentvariabledefinition_credential_cyberarksafe` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarksafe` | `cyberarksafe` |
| `environmentvariabledefinition_credential_cyberarkobject` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkobject` | `cyberarkobject` |
| `environmentvariabledefinition_credential_cyberarkusername` | [environmentvariabledefinition](environmentvariabledefinition.md) | `cyberarkusername` | `cyberarkusername` |
| `environmentvariabledefinition_credential_certificate` | [environmentvariabledefinition](environmentvariabledefinition.md) | `certificate` | `certificate` |
| `EnvironmentVariableDefinition_ReportParameter_EvironmentVariableDefinitionId` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariabledefinitionid` | `EnvironmentVariableDefinition_ReportParameters` |
| `envvardefinition_powerbimashupparameter` | [environmentvariabledefinition](environmentvariabledefinition.md) | `environmentvariableid` | `EnvironmentVariableId` |

### Many-to-Many (3)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `bot_environmentvariabledefinition` | [bot](bot.md) | _n/a_ | `bot_environmentvariabledefinition` |
| `botcomponent_environmentvariabledefinition` | [botcomponent](botcomponent.md) | _n/a_ | `botcomponent_environmentvariabledefinition` |
| `msdyn_connectordatasource_environmentvariable` | [msdyn_connectordatasource](msdyn_connectordatasource.md) | _n/a_ | `msdyn_connectordatasource_environmentvari` |

## Source

Generated from [environmentvariabledefinition (live)](https://crmoperativodevevo.crm4.dynamics.com/api/data/v9.2/EntityDefinitions(LogicalName='environmentvariabledefinition')) on 2026-05-07.