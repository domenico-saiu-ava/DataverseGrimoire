---
logical: "msdyn_federatedarticleincident"
display: "Knowledge Federated Article Incident"
entitySetName: "msdyn_federatedarticleincidents"
primaryId: "msdyn_federatedarticleincidentid"
primaryName: "msdyn_name"
tableType: "Standard"
ownership: "OrganizationOwned"
---

# Knowledge Federated Article Incident

## Identity

| Property | Value |
| --- | --- |
| Logical name | `msdyn_federatedarticleincident` |
| Display name | Knowledge Federated Article Incident |
| Display (plural) | Knowledge Federated Article Incidents |
| Schema name | `msdyn_federatedarticleincident` |
| Entity set (Web API) | `msdyn_federatedarticleincidents` |
| Primary id attribute | `msdyn_federatedarticleincidentid` |
| Primary name attribute | `msdyn_name` |
| Table type | Standard |
| Ownership | OrganizationOwned |

## Web API examples

```http
GET /api/data/v9.2/msdyn_federatedarticleincidents?$select=msdyn_name&$top=10
GET /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
POST /api/data/v9.2/msdyn_federatedarticleincidents
PATCH /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
DELETE /api/data/v9.2/msdyn_federatedarticleincidents(<guid>)
```

## Attributes

Writable: **11** · Read-only: **8**

### Writable

`ImportSequenceNumber`, `msdyn_federatedarticleid`, `msdyn_federatedarticleincidentId`, `msdyn_incidentid`, `msdyn_name`, `msdyn_searchproviderarticleid`, `OverriddenCreatedOn`, `statecode`, `statuscode`, `TimeZoneRuleVersionNumber`, `UTCConversionTimeZoneCode`

### Read-only

`CreatedBy`, `CreatedOn`, `CreatedOnBehalfBy`, `ModifiedBy`, `ModifiedOn`, `ModifiedOnBehalfBy`, `OrganizationId`, `VersionNumber`

## Relationships

### Many-to-One (6)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `lk_msdyn_federatedarticleincident_createdby` | [systemuser](systemuser.md) | `createdby` | `createdby` |
| `lk_msdyn_federatedarticleincident_createdonbehalfby` | [systemuser](systemuser.md) | `createdonbehalfby` | `createdonbehalfby` |
| `lk_msdyn_federatedarticleincident_modifiedby` | [systemuser](systemuser.md) | `modifiedby` | `modifiedby` |
| `lk_msdyn_federatedarticleincident_modifiedonbehalfby` | [systemuser](systemuser.md) | `modifiedonbehalfby` | `modifiedonbehalfby` |
| `msdyn_federatedarticle_msdyn_federatedarticleincident_federatedarticleId` | [msdyn_federatedarticle](msdyn_federatedarticle.md) | `msdyn_federatedarticleid` | `msdyn_federatedarticleid` |
| `organization_msdyn_federatedarticleincident` | [organization](organization.md) | `organizationid` | `organizationid` |

### One-to-Many (8)

| Name | Target entity | Referencing attribute | Navigation property |
| --- | --- | --- | --- |
| `msdyn_federatedarticleincident_AsyncOperations` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticleincident_BulkDeleteFailures` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticleincident_DuplicateBaseRecord` | _n/a_ | `baserecordid` | _n/a_ |
| `msdyn_federatedarticleincident_DuplicateMatchingRecord` | _n/a_ | `duplicaterecordid` | _n/a_ |
| `msdyn_federatedarticleincident_MailboxTrackingFolders` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticleincident_PrincipalObjectAttributeAccesses` | _n/a_ | `objectid` | _n/a_ |
| `msdyn_federatedarticleincident_ProcessSession` | _n/a_ | `regardingobjectid` | _n/a_ |
| `msdyn_federatedarticleincident_SyncErrors` | _n/a_ | `regardingobjectid` | _n/a_ |


## Source

Generated from [msdyn_federatedarticleincident.md](https://github.com/MicrosoftDocs/powerapps-docs/blob/main/powerapps-docs/developer/data-platform/reference/entities/msdyn_federatedarticleincident.md) on 2026-05-06.